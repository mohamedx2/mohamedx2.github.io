# Download remaining placeholder images
$publicDir = "public"

Write-Host "Downloading placeholder images..." -ForegroundColor Cyan

# Project placeholders - using placeholder services
$projectImages = @{
    "CardImage.png" = "https://placehold.co/600x400/1a1a2e/00d4ff?text=Card+Dashboard+UI&font=raleway"
    "NextWebsite.png" = "https://placehold.co/600x400/0f0f1e/7b2cbf?text=Next.js+Website&font=raleway"
    "SpaceWebsite.png" = "https://placehold.co/600x400/0a192f/64ffda?text=Space+Website&font=raleway"
    "LockTop.png" = "https://placehold.co/200x200/1a1a2e/00d4ff?text=Lock&font=raleway"
    "LockMain.png" = "https://placehold.co/200x200/1a1a2e/ff006e?text=Security&font=raleway"
    "mainIconsdark.svg" = "https://placehold.co/100x100/000000/ffffff?text=Icon&font=raleway"
}

foreach ($img in $projectImages.GetEnumerator()) {
    $outputPath = Join-Path $publicDir $img.Key
    Write-Host "  Downloading $($img.Key)..." -ForegroundColor Gray
    
    try {
        Invoke-WebRequest -Uri $img.Value -OutFile $outputPath -ErrorAction Stop
        Write-Host "  OK Downloaded $($img.Key)" -ForegroundColor Green
    }
    catch {
        Write-Host "  X Failed $($img.Key)" -ForegroundColor Red
    }
}

Write-Host "`nPlaceholder images downloaded!" -ForegroundColor Cyan
