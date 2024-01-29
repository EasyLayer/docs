#!/bin/bash

#
# documentation tags: c0cc5e69-874c-471e-9635-bc706e544abf
#

# Check if a directory argument is provided
if [ $# -eq 0 ]; then
    echo "No directory specified. Usage: $0 [SWAGGER_DIRECTORY]"
    exit 1
fi

# Swagger source directory (passed as the first script argument)
swagger_dir="$1"

# Destination directory
output_dir="docs/rest-api/"

# Path to Widdershins executable
widdershins="./node_modules/.bin/widdershins"

# Path to the Widdershins configuration file
widdershins_config="widdershins-config.json"

# User templates directory
user_templates="templates"

# Check if Widdershins is installed locally
if [ ! -f "$widdershins" ]; then
    echo "Widdershins is not installed locally. Please install it by running 'npm install widdershins --save-dev'."
    exit 1
fi

# Loop through all .json files in the Swagger directory
for file in "$swagger_dir"*.json; do
    # Get the base name of the file without extension
    filename=$(basename -- "$file")
    filename="${filename%.*}"

    # Split filename into folderName and Version
    IFS='_' read -ra ADDR <<< "$filename"
    folderName="${ADDR[0]}"
    version="${ADDR[1]}"

    # Create folder if it does not exist
    if [ ! -d "$output_dir$folderName" ]; then
        mkdir -p "$output_dir$folderName"
    fi

    outputMarkdownFile="$output_dir$folderName/$version.md"

    # Generate Markdown file using Widdershins
    # NOTE: Widdershins uses the -o flag (short for --outfile) to specify an output file, 
    # and if a file with the same name already exists, it will be replaced with a new file.
    if ! "$widdershins" "$file" --user_templates="$user_templates" --environment="$widdershins_config" --search=false --language_tabs='http:HTTP' -o "$outputMarkdownFile"; then
        echo "Error processing file $file"
        exit 1
    fi
    echo "File $file successfully converted to $outputMarkdownFile"
done

echo "All files were processed successfully"
