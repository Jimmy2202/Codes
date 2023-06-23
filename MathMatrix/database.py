import sqlite3 

class DataBase():
	def __init__(self, name = "system2.db") -> None:
		self.name = name

	def conecta(self):
		self.connection = sqlite3.connect(self.name)

	def close_connection(self):
		try:
			self.connection.close()
		except:
			pass

	def create_table_users2(self):
		try:
			cursor = self.connection.cursor()
			cursor.execute("""
				
				CREATE TABLE IF NOT EXISTS users2(

					id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
					name TEXT NOT NULL,
					user TEXT UNIQUE NOT NULL,
					password TEXT NOT NULL

				);

			""")
		except AttributeError:
			print("Faça conexão")


	def insert_user(self,name,user,password):

		try:
			cursor = self.connection.cursor()
			cursor.execute("""

				INSERT INTO users2(name,user,password) VALUES(?,?,?)


			""", (name,user,password))
			self.connection.commit()
		except AttributeError:
			print("Faça conexão")


	def check_user(self,user,password):
		try:
			cursor = self.connection.cursor()
			cursor.execute("""

				SELECT * FROM users2;

			""")

			for linha in cursor.fetchall():
				if linha[2].upper() == user.upper() and linha[3] == password:
					return "ok"
					break
				elif linha[2].upper() == user.upper() and linha[3] != password:
					return "senha invalida"
					break
				else:
					continue
			return "sem acesso"
		except:
			pass

if __name__ == "__main__":
	db2 = DataBase()
	db2.conecta()
	db2.create_table_users2()
	db2.close_connection()