
### Installation des dépendances serveur
npm install --global yarn

depuis le repertoire /etc/html/www/wss/back/server/

yarn install

### Mis en place du serveur node

add wss.service in /etc/systemd/system/

sudo systemctl daemon-reload

sudo systemctl start wss

sudo systemctl enable wss

