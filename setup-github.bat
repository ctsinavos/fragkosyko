@echo off
echo ========================================
echo Fragkosiko - GitHub Setup Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if already a git repository
if exist ".git" (
    echo Git repository already initialized.
    echo.
) else (
    echo Initializing Git repository...
    git init
    echo.
)

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo ========================================
    echo NEXT STEPS:
    echo ========================================
    echo 1. Create a repository on GitHub:
    echo    https://github.com/new
    echo.
    echo 2. Then run these commands:
    echo    git remote add origin YOUR_GITHUB_REPO_URL
    echo    git add .
    echo    git commit -m "Initial commit"
    echo    git branch -M main
    echo    git push -u origin main
    echo.
    echo 3. Deploy on Netlify:
    echo    https://app.netlify.com
    echo    - Connect your GitHub repository
    echo    - Deploy automatically happens!
    echo    - HTTPS is enabled automatically
    echo.
) else (
    echo Remote already configured.
    echo.
    echo Current status:
    git status --short
    echo.
    echo To push changes:
    echo   git add .
    echo   git commit -m "Your message"
    echo   git push
    echo.
)

echo ========================================
echo For full deployment guide, see:
echo DEPLOYMENT.md
echo ========================================
pause

