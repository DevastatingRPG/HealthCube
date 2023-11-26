
# Health Cube

Project Submission for CharmHealth Hackathon by HealthCube.ssv




## Installation

Clone the GitHub 'main' branch onto your folder and run the following commands.
You can replace yarn with npm if not installed.

```bash
  yarn install
  cd server
  yarn install
  cd ../client
  yarn install
  cd ..
```
Once these installs have completed, run init.py using your python interpreter if installed and enter the values as asked. Or create .env files in server and client folders with following content :-

server/.env : 
```
  SQL_USER = <sql user name> (root by default)
  SQL_PASSWORD = <sql password>
  SQL_DATABASE = "healthcube"
  SQL_SERVER = <sql server name> (localhost by default)
  JWT_SECRET_KEY = "2ea0e8ab7067ef90bfbc9d319892491d177403df4467ab7059149e3f80af97ec"

```

client/.env :
```
  EXPO_PUBLIC_IPv4 = <Local ipv4 address of pc running nodejs server, can be fetched using ipconfig>
```

After these have been filled, open mysql workbench and import data from 'hc.sql' file, without using any schema (create statements included).

If you encounter the error 'Function has no deterministic...' enter the following query in mysql and try again:
```SQL
SET GLOBAL log_bin_trust_function_creators = 1;

```

Now run these queries in mysql :
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

```
Here replace 'root' with your sql user, 'localhost' with sql server,
'password' with sql server password.

## Usage

In the directory where project has been cloned, run the following command :

```bash
yarn start
```
This will start the nodejs server and the expo app. Now once a qr code is shown on the screen, Either:
1. Scan it with the 'Expo Go' app on Playstore/App Store.
2. If android studio with emulator is installed, run the emulator and then press a on the terminal to open in emulator.
3. Login with Expo account provided during submission.
4. Login or Register your account in our app.
5. Fill Forms to gain currency which you can use to buy new animals from the store.
6. Check your ranking among other users on the LeaderBoard calculated by how valuable and how many animals you have.
7. Check your entire collection and balance in the Profile Section.
