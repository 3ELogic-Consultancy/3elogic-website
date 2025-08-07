# IIS Deployment Guide for 3ELogic Website

## Prerequisites

1. **Node.js** (v18 or higher) installed on your development machine
2. **IIS** installed on your Windows Server
3. **URL Rewrite Module** for IIS (required for client-side routing)
4. **Application Request Routing (ARR)** for reverse proxy (if using Node.js hosting)

## Method 1: Static Export (Recommended)

### Step 1: Build the Application

```bash
# Install dependencies
npm install

# Build for static export
npm run build:iis
```

This will create a `out/` directory with static files.

### Step 2: Deploy to IIS

1. **Create IIS Site:**
   - Open IIS Manager
   - Right-click on "Sites" → "Add Website"
   - Site name: `3elogic-website`
   - Physical path: `C:\inetpub\wwwroot\3elogic-website`
   - Port: `80` (or your preferred port)

2. **Copy Files:**
   - Copy all contents from the `out/` directory to your IIS site directory
   - Ensure `web.config` is in the root directory

3. **Set Permissions:**
   - Right-click on the site folder → Properties → Security
   - Add `IIS_IUSRS` with Read & Execute permissions
   - Add `IUSR` with Read & Execute permissions

### Step 3: Configure Domain

1. **DNS Configuration:**
   - Add an A record pointing your domain to your server's IP address
   - Example: `www.3elogic.com` → `YOUR_SERVER_IP`

2. **IIS Binding:**
   - In IIS Manager, select your site
   - Click "Bindings" in the right panel
   - Add binding: Host name = `www.3elogic.com`
   - Port = `80` (or `443` for HTTPS)

3. **SSL Certificate (Recommended):**
   - Install SSL certificate for your domain
   - Add HTTPS binding (port 443)
   - Configure HTTP to HTTPS redirect

## Method 2: Node.js Hosting (Alternative)

If you prefer server-side rendering:

### Step 1: Install Node.js on Server

1. Download and install Node.js on your Windows Server
2. Install PM2 for process management: `npm install -g pm2`

### Step 2: Deploy Application

1. **Copy Application:**
   ```bash
   # On your server
   mkdir C:\3elogic-website
   # Copy your application files here
   ```

2. **Install Dependencies:**
   ```bash
   cd C:\3elogic-website
   npm install --production
   ```

3. **Build Application:**
   ```bash
   npm run build
   ```

4. **Start with PM2:**
   ```bash
   pm2 start npm --name "3elogic-website" -- start
   pm2 save
   pm2 startup
   ```

### Step 3: Configure IIS Reverse Proxy

1. **Install ARR:**
   - Download and install Application Request Routing
   - Enable proxy in ARR settings

2. **Configure web.config for Reverse Proxy:**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
     <system.webServer>
       <rewrite>
         <rules>
           <rule name="ReverseProxyToNode" stopProcessing="true">
             <match url="(.*)" />
             <action type="Rewrite" url="http://localhost:3000/{R:1}" />
           </rule>
         </rules>
       </rewrite>
     </system.webServer>
   </configuration>
   ```

## Important Notes

### SSR Considerations

1. **Static Export (Current Setup):**
   - ✅ Works perfectly with IIS
   - ✅ No server-side rendering needed
   - ✅ Better performance and reliability
   - ❌ No dynamic server-side features

2. **Node.js Hosting:**
   - ✅ Full SSR support
   - ✅ Dynamic features available
   - ❌ More complex setup
   - ❌ Requires Node.js on server

### Security Considerations

1. **HTTPS:**
   - Always use HTTPS in production
   - Configure HTTP to HTTPS redirect
   - Use strong SSL certificates

2. **Headers:**
   - Security headers are configured in `web.config`
   - Additional headers can be added in `next.config.ts`

3. **File Permissions:**
   - Restrict access to sensitive files
   - Use appropriate IIS user permissions

### Performance Optimization

1. **Caching:**
   - Static files are cached for 7 days
   - Images are cached for 1 day
   - Enable compression in IIS

2. **CDN:**
   - Consider using a CDN for global performance
   - Configure CDN to cache static assets

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh:**
   - Ensure URL Rewrite Module is installed
   - Check web.config routing rules

2. **Images Not Loading:**
   - Verify MIME types in web.config
   - Check file permissions

3. **Slow Performance:**
   - Enable compression in IIS
   - Check if caching is working
   - Consider using CDN

### Logs

- **IIS Logs:** `C:\inetpub\logs\LogFiles`
- **Application Logs:** Windows Event Viewer
- **PM2 Logs:** `pm2 logs 3elogic-website`

## Maintenance

1. **Updates:**
   - Build new version locally
   - Copy new files to server
   - Test thoroughly before going live

2. **Backups:**
   - Regular backups of application files
   - Database backups (if applicable)
   - Configuration backups

3. **Monitoring:**
   - Set up application monitoring
   - Monitor server resources
   - Set up alerts for downtime 