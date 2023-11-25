import os

# Ask the user for input
sql_user = input("Enter SQL user: ")
sql_password = input("Enter SQL password: ")
sql_database = input("Enter SQL database: ")
sql_server = input("Enter SQL server: ")
jwt_secret_key = input("Enter JWT secret key: ")
ipv4 = input("Enter ipv4 address of device used to run node server : ")

# Write the input to the .env file
with open('server/.env', 'w') as f:
   f.write(f'SQL_USER = "{sql_user}"\n')
   f.write(f'SQL_PASSWORD = "{sql_password}"\n')
   f.write(f'SQL_DATABASE = "{sql_database}"\n')
   f.write(f'SQL_SERVER = "{sql_server}"\n')
   f.write(f'JWT_SECRET_KEY = "{jwt_secret_key}"\n')

with open('client/.env', 'w') as f:
   f.write(f'EXPO_PUBLIC_IPv4 = "{ipv4}"')