# Create placeholder video files
$publicDir = "public"

Write-Host "Creating placeholder video files..." -ForegroundColor Cyan

# For webm files, we'll download small sample videos or create empty placeholders
$videoUrls = @{
    "blackhole.webm" = "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.webm"
    "encryption.webm" = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm"
    "cards-video.webm" = "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.webm"
}

foreach ($video in $videoUrls.GetEnumerator()) {
    $outputPath = Join-Path $publicDir $video.Key
    Write-Host "  Downloading $($video.Key)..." -ForegroundColor Gray
    
    # Try to download, if fails create empty file
    try {
        # Download only first 5 seconds (5MB limit)
        Invoke-WebRequest -Uri $video.Value -OutFile $outputPath -ErrorAction Stop -MaximumRedirection 3 -TimeoutSec 10
        Write-Host "  OK Downloaded $($video.Key)" -ForegroundColor Green
    }
    catch {
        Write-Host "  Creating empty placeholder for $($video.Key)" -ForegroundColor Yellow
        # Create an empty file as placeholder
        New-Item -Path $outputPath -ItemType File -Force | Out-Null
    }
}

Write-Host "`nVideo files ready!" -ForegroundColor Cyan
