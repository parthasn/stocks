sudo apt update

sudo apt install openjdk-11-jdk

java -version

export JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64

wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
/etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins

initialPassword=$(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)
echo "Inital password is $initialPassword"

sudo apt install unzip

mkdir gradle
cd gradle/
wget https://downloads.gradle-dn.com/distributions/gradle-7.1.1-bin.zip

unzip *.zip
rm -rf *.zip



