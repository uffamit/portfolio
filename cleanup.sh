#!/bin/bash

echo "🧹 Cleaning up unwanted files..."

# Remove temporary script
rm -f fix-git-remote.sh

# Remove unused route files
rm -rf src/app/amit-divekar.jpg
rm -rf src/app/profile
rm -rf src/app/api/profile-image
rm -rf src/app/image-sitemap.xml

echo "✅ Cleanup complete!"
echo ""
echo "Removed:"
echo "  - fix-git-remote.sh"
echo "  - src/app/amit-divekar.jpg/"
echo "  - src/app/profile/"
echo "  - src/app/api/profile-image/"
echo "  - src/app/image-sitemap.xml/"
echo ""
echo "Now commit the cleanup:"
echo "  git add ."
echo "  git commit -m \"cleanup: remove unused files and routes\""
echo "  git push"
