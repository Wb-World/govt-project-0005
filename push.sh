#!/bin/sh
date=$(date)
git add .
git commit -m "Updated at (${date})"
git push