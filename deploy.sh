#!/bin/bash
# SEHW Sanya 部署脚本
# 使用方法: bash deploy.sh

set -e

APP_DIR="/var/www/sehw-sanya"
NGINX_CONF="/etc/nginx/sites-available/sehw-sanya"

echo "=== 1. 安装依赖并构建 ==="
npm install --production=false
npm run build

echo "=== 2. 部署到 $APP_DIR ==="
sudo mkdir -p $APP_DIR
sudo cp -r .next package.json package-lock.json next.config.mjs node_modules $APP_DIR/

# 如果使用 standalone 模式
if [ -d ".next/standalone" ]; then
  sudo cp -r .next/standalone/* $APP_DIR/
  sudo cp -r .next/static $APP_DIR/.next/static
  sudo cp -r public $APP_DIR/public 2>/dev/null || true
fi

echo "=== 3. 配置 Nginx ==="
sudo cp nginx.conf $NGINX_CONF

# 创建软链接（如果不存在）
if [ ! -L "/etc/nginx/sites-enabled/sehw-sanya" ]; then
  sudo ln -s $NGINX_CONF /etc/nginx/sites-enabled/sehw-sanya
fi

# 测试 Nginx 配置
sudo nginx -t

echo "=== 4. 重启服务 ==="
sudo systemctl reload nginx

# 使用 PM2 管理 Node 进程
if command -v pm2 &> /dev/null; then
  pm2 delete sehw-sanya 2>/dev/null || true
  pm2 start ecosystem.config.js
  pm2 save
  echo "PM2 进程已启动"
else
  echo "建议安装 PM2 来管理进程: npm install -g pm2"
  echo "手动启动: cd $APP_DIR && npm start"
fi

echo "=== 部署完成 ==="
echo "请确保已将 nginx.conf 中的 your-domain.com 替换为你的实际域名"
