#!/bin/bash

# Update git remote URL to use new username
git remote set-url origin https://github.com/amitdevx/portfolio.git

# Verify the change
echo "✅ Updated remote URL:"
git remote -v

# Update git config
git config user.name "Amit Divekar"
git config user.email "amitdivekar289@gmail.com"

# Disable GPG signing for this repository (fix the signing error)
git config commit.gpgsign false

# Also disable it globally if needed
git config --global commit.gpgsign false

echo ""
echo "✅ Git configuration updated!"
echo "✅ GPG signing disabled"
echo ""
echo "Now you can commit with:"
echo "  git add ."
echo "  git commit -m \"adding new features in blogs\""
echo "  git push"
