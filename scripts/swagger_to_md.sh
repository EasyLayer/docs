#!/bin/bash

# Swagger source directory
swagger_dir="swagger/"

# Destination directory for Markdown files
output_dir="docs/rest-api/plugins/"

# Function to check if Widdershins is installed
check_widdershins_installed() {
    if ! command -v widdershins &> /dev/null; then
        echo "Widdershins is not installed. Installing..."
        npm install -g widdershins
        if [ $? -ne 0 ]; then
            echo "Failed to install Widdershins. Please check your npm configuration."
            exit 1
        fi
    fi
}

# Check if Widdershins is installed
check_widdershins_installed

# Create the destination directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all .json files in the Swagger directory
for file in "$swagger_dir"*.json; do
    # Get the base name of the file without extension
    filename=$(basename -- "$file")
    filename="${filename%.*}"

    # Generate Markdown file using Widdershins
    if ! widdershins "$file" -o "$output_dir$filename.md"; then
        echo "Error processing file $file"
        exit 1
    fi
    echo "File $file successfully converted"
done

echo "All files were processed successfully"
