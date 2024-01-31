
### Nodejs min 20.11.0 require, to do update : 

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

### Installing server dependencies
npm install --global yarn

from server dir, exemple :  /etc/html/www/wss/back/server/

yarn install

rename the file .env.exemple to .env

enter the database connection information

### Setting up the node server

# Create service file on /etc/systemd/system, exemple wss.service: 

----------------------------------------

[Unit]
Description=Serveur web wondersoftStudio
After=network.target

[Service]
WorkingDirectory=/var/www/html/
ExecStart=/usr/local/bin/node /var/www/html/wss/back/server/server.js => replace with your own directories

Restart=on-failure
User=nicov => replace with your own user
Group=root => replace with your own goup

# Timeout of 500ms between crash and reboot
RestartSec=500ms

[Install]
WantedBy=multi-user.target

------------------------------------

# saving the file in the systemctl daemon :
sudo systemctl daemon-reload

# Create symlink and active it : 
sudo systemctl enable myservice

# Start service : 
sudo systemctl start myservice

# Check server status : 
sudo systemctl status myservice