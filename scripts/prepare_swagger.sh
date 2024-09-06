#!/bin/bash

# Check if at least two arguments (API_DOCS_DIR and CONFIG_DOCS_DIR) are provided
if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <API_DOCS_DIR> <CONFIG_DOCS_DIR> [OUTPUT_DIR]"
  exit 1
fi

# Directories for OpenAPI and configuration files
API_DOCS_DIR=${1:-"api-docs"}  # Directory for OpenAPI documents (default: "api-docs")
CONFIG_DOCS_DIR=${2:-"config-docs"}  # Directory for configuration documents (default: "config-docs")
OUTPUT_DIR=${3:-"swagger"}  # Directory for saving output (default: "swagger")

# Key to use for the envs object in OpenAPI files
ENVS_KEY="envs"  # Default key name for envs object

# Ensure that the OUTPUT_DIR exists
mkdir -p "$OUTPUT_DIR"

# Function to merge configuration files into the envs object
merge_configs_into_envs() {
  local package_name="$1"
  local config_dir="$CONFIG_DOCS_DIR/$package_name"
  local envs_obj="{}"

  # Check if the config directory exists
  if [[ -d "$config_dir" ]]; then
    # Iterate over each JSON configuration file in the package folder
    for config_file in "$config_dir"/*.json; do
      if [[ -f "$config_file" ]]; then
        # Extract the configuration title and add its content to the envs object
        config_title=$(jq -r '.title' "$config_file")
        if [[ "$config_title" != "null" ]]; then
          config_content=$(jq -r '.properties' "$config_file")
          envs_obj=$(jq --arg title "$config_title" --argjson content "$config_content" '.[$title] = $content' <<<"$envs_obj")
        fi
      fi
    done
  fi

  # Return the envs object
  echo "$envs_obj"
}

# Iterate over each OpenAPI file in the API_DOCS_DIR
for api_file in "$API_DOCS_DIR"/*.json; do
  if [[ -f "$api_file" ]]; then
    # Extract the package name from the file (e.g., "el@bitcoin-indexer" from "el@bitcoin-indexer_v0.0.1.json")
    base_name=$(basename "$api_file" .json)
    package_name=$(echo "$base_name" | cut -d'_' -f1)

    # Check if the corresponding config folder exists
    if [[ -d "$CONFIG_DOCS_DIR/$package_name" ]]; then
      # Gather the envs object for the current package
      envs=$(merge_configs_into_envs "$package_name")

      # Add the envs object to the OpenAPI file under the specified key
      new_api_content=$(jq --argjson envs "$envs" --arg key "$ENVS_KEY" '.[$key] = $envs' "$api_file")

      # Save the updated OpenAPI file to the OUTPUT_DIR
      output_file="$OUTPUT_DIR/$base_name.json"
      echo "$new_api_content" > "$output_file"

      echo "Processed $package_name: added $ENVS_KEY and saved to $output_file"
    else
      echo "No config folder found for $package_name, skipping."
    fi
  fi
done
