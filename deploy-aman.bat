@echo off
echo === Deploy Website PWILN - Aman Mode ===

REM ==== MINTA TOKEN ====
set /p TOKEN=Masukkan GitHub Token (PAT): 
set USER=budipratama676-pwiln-org
set REPO=persatuan-warga

REM ==== INIT GIT ====
git init
git config user.email "you@example.com"
git config user.name "PWILN Bot"

REM ==== ADD FILES ====
git add .
git commit -m "🚀 Deploy aman PWILN Website"

REM ==== FIX REMOTE ====
git remote remove origin 2>nul
git remote add origin https://%USER%:%TOKEN%@github.com/%USER%/%REPO%.git

REM ==== PUSH ====
git branch -M main
git push -u origin main --force

echo.
echo 🚀 Website berhasil di-push ke GitHub!
echo 🌐 URL: https://%USER%.github.io/%REPO%
pause
