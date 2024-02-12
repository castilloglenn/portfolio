#!usr/bin/env sh

set -e

# Build the project
npm run build

# Define the path to the local repository
repo_path="/Users/mb-02/Documents/personal/castilloglenn.github.io"

# Navigate to the local repository
cd $repo_path

# Pull the latest changes from the remote repository
git pull origin main

# Navigate back to the original directory
cd -

# Synchronize the contents of the dist folder with the local repository, excluding the .git directory
rsync -a --delete --exclude=.git dist/ $repo_path/

# Navigate to the local repository
cd $repo_path

# Add all changes
git add -A

# Commit the changes with a custom message
commit_message=$1
git commit -m "$commit_message"

# Push the changes
git push origin main

# Navigate back to the original directory
cd -