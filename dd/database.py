import psycopg2, os

 # $Env:DATABASE_URL=$(heroku config:get DATABASE_URL -a oobat)
 # set environment variable in powershell ^

class Database():
    def __init__(self):
        """initialize class by attempting to connect to the database"""
        self.DATABASE_URL = os.environ.get('DATABASE_URL') # read in database url environment variable
        try:
            # create a new database connection by calling the connect() function
            self.connection = psycopg2.connect(self.DATABASE_URL)

            #  create a new cursor
            self.cursor = self.connection.cursor()

            # execute an SQL statement to get the HerokuPostgres database version
            print('PostgreSQL database version:')
            self.cursor.execute('SELECT version()')

            # display the PostgreSQL database server version
            db_version = self.cursor.fetchone()
            print(db_version)

        except Exception as error:
            print('Cause: {}'.format(error))
            print('Unable to connect to the database server. Terminating.')
            exit(1)

    def searchCard(self, key):
        """Search for a specific card in the DB by key
           input: the search key
           return: the card, if found, None otherwise"""
        try:
            self.cursor.execute("SELECT * FROM cards WHERE key = '{}'".format(key)) # query the DB
            result = self.cursor.fetchone() # extract the DB response
            return result # return the response
        except:
            return -1

    def removeCard(self, key):
        """Remove a card from the DB by key
           input: the card key
           return: none"""
        key = key.lower()
        try:
            self.cursor.execute("DELETE FROM cards WHERE key = '{}'".format(key))
            self.connection.commit() # save the changes
            return 'success'
        except:
            return 'failure'

    def addCard(self, key, hint1, hint2, hint3, hint4, hint5):
        """Add a card into the database
           input: the key word and 5 hints
           return: none"""
        key = key.lower() # only lowercase strings go in to the database
        hint1 = hint1.lower()
        hint2 = hint2.lower()
        hint3 = hint3.lower()
        hint4 = hint4.lower()
        hint5 = hint5.lower()
        if (len(key)==0 or len(hint1)==0 or len(hint2)==0 or len(hint3)==0 or len(hint4)==0 or len(hint5)==0):
            return 'failure'
        try:
            self.cursor.execute("INSERT INTO cards (key, hint1, hint2, hint3, hint4, hint5) VALUES ('{}', '{}', '{}', '{}', '{}', '{}')".format(key, hint1, hint2, hint3, hint4, hint5)) # execute INSERT statement
            self.connection.commit() # commit() must be called for changes to persist in DB
            return 'success'
        except:
            return 'failure'

    def clearHighScores(self):
        """Resets the scores table to its default"""
        self.cursor.execute(open("default_scores.sql", "r").read()) # default_scores.sql drops the existing table and replaces it with the default scores table
        self.connection.commit() # persist the changes
