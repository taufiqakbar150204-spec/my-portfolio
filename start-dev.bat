@echo off
title Menjalankan Portfolio Full-Stack
echo ====================================================
echo    MENJALANKAN FULL-STACK PORTFOLIO DEVELOPER
echo ====================================================
echo.

:: Pastikan path Node.js dari Laragon terbaca
set PATH=D:\laragon\bin\nodejs\node-v22;%PATH%

echo [1/2] Menyalakan Backend Server (Port 5000)...
start "Backend Server (Express)" cmd /k "set PATH=D:\laragon\bin\nodejs\node-v22;%%PATH%% && cd /d D:\my-portfolio\server && npm run dev"

echo [2/2] Menyalakan Frontend Client (Port 5173)...
start "Frontend Client (Vite)" cmd /k "set PATH=D:\laragon\bin\nodejs\node-v22;%%PATH%% && cd /d D:\my-portfolio\client && npm run dev"

echo.
echo ====================================================
echo Server berhasil dijalankan!
echo Membuka browser ke http://localhost:5173 ...
echo ====================================================
timeout /t 3 >nul
start http://localhost:5173
