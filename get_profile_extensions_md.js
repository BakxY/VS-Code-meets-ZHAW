/**
 * @file generate_profiles.js
 * @author Severin Sprenger (severin.sprenger@sespra.ch)
 * @brief A script used to merge custom profile description files into one `.code-profile` file.
 * @date 21.10.2025
 */

import fs from "fs/promises";
import path from "path";

const passed_arguments = process.argv.slice(2);

async function read_json_file(path_to_file)
{
    /** Read raw file contents */
    const file_content = await fs.readFile(path_to_file);

    /** Parse file contents to JSON format. */
    return JSON.parse(file_content);
}

async function main()
{
    if(passed_arguments.length == 0)
    {
        console.error("Usage: node get_profile_extensions_md.js [path]");
        return;
    }

    const profile_extensions = await read_json_file(passed_arguments[0]);

    for(const index in profile_extensions)
    {
        const extension = profile_extensions[index];

        console.log(`* **${extension["displayName"]}**`);
    }
}

main();