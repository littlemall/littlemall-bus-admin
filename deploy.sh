sudo docker rm -f littlemalladmin
sudo docker rmi -f littlemall/littlemalladmin
sudo docker build -t littlemall/littlemalladmin .
sudo docker run --name littlemalladminfe -p 8088:8088 -d littlemall/littlemalladmin