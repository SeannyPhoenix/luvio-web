#!/bin/bash
echo "Uploading to S3 bucket..."
aws s3 sync ./build s3://getluv.io --quiet
echo "Upload complete."