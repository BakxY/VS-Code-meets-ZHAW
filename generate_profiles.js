/**
 * @file generate_profiles.js
 * @author Severin Sprenger (severin.sprenger@sespra.ch)
 * @brief A script used to merge custom profile description files into one `.code-profile` file.
 * @date 21.10.2025
 */

import fs from "fs/promises";
import path from "path";

const excluded_dirs = [
    ".git"
];

async function get_profile_dirs() 
{
    /** Get all files & directories in the current work dir. */
    const dir_content = await fs.readdir(".", {withFileTypes: true});

    /** Filter for folders only and extract directory name. */
    const all_dirs = dir_content.filter(
        entry => entry.isDirectory()
    ).map(
        dir => dir.name
    );

    /** Filter all excluded directories from list. */
    return all_dirs.filter(
        dir => !excluded_dirs.includes(dir)
    );
}

async function read_json_file(path_to_file)
{
    /** Read raw file contents */
    const file_content = await fs.readFile(path_to_file);

    /** Parse file contents to JSON format. */
    return JSON.parse(file_content);
}

async function main()
{
    const profile_dirs = await get_profile_dirs();

    for(const index in profile_dirs)
    {
        const profile = profile_dirs[index];

        const metadata_path = path.join(profile, "metadata.json");
        const extensions_path = path.join(profile, "extensions.json")

        /** Read custom profile description files. */
        const profile_metadata = await read_json_file(metadata_path);
        const profile_extensions = await read_json_file(extensions_path);

        const code_profile = profile_metadata;

        code_profile["extensions"] = JSON.stringify(profile_extensions);

        await fs.writeFile(
            path.join(
                profile, `${profile}.code-profile`
            ), 
            JSON.stringify(code_profile)
        );
    }
}

main();