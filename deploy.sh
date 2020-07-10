sudo docker build -t littlemall/littlemalladmin .
sudo docker run --name littlemalladmincontainer -p 8088:8088 -d littlemall/littlemalladmin