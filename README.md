
### Nodejs min 20.11.0 require, to do update : 

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

### Installation des dépendances serveur
npm install --global yarn

depuis le repertoire /etc/html/www/wss/back/server/

yarn install

copier le fichier .env.exemple vers .env
renseigner les informations de connexions à la bdd

### Mis en place du serveur node

add wss.service in /etc/systemd/system/

sudo systemctl daemon-reload

sudo systemctl start wss

sudo systemctl enable wss

