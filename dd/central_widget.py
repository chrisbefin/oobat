

#!/usr/bin/env python3

# QLineEdit
# QComboBox
# QTextEdit
# QFont
# QIcon
# QLabel
# QPushButton

# QDialog
# QDocWidget
# message box
from database import Database

from PyQt5.QtWidgets import QWidget, QVBoxLayout, QHBoxLayout, QLabel, QPushButton, QGroupBox, QComboBox, QTextEdit, QLineEdit, QFrame
from PyQt5.QtCore import Qt, pyqtSignal
from PyQt5.QtGui import QFont, QColor

from confirmation_dialog import confirmationDialog
from message_box import messageBox
class CentralWidget(QWidget):
    """ This widget is used as the central widget in a main window. It shows
        how to add a main layout, add a QLabel to a layout, add a layout to a
        layout, and add a push button to a layout.
    """
    quitApplication = pyqtSignal()

    def __init__(self, actions, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.db = Database() # initialize database object
        # ---------------------------------------------------------------------
        # data members
        # ---------------------------------------------------------------------

        # ---------------------------------------------------------------------
        # Frames
        # ---------------------------------------------------------------------
        formFrame = QFrame()
        formFrame.setFrameShape(QFrame.Panel)
        formFrame.setFrameShadow(QFrame.Raised)
        # ---------------------------------------------------------------------
        # Layouts
        # ---------------------------------------------------------------------
        masterLayout = QVBoxLayout(self)
        mainLayout = QHBoxLayout()
        addCardLayout = QVBoxLayout()
        deleteCardLayout = QVBoxLayout()
        searchCardLayout = QVBoxLayout()
        scoresLayout = QVBoxLayout()
        # ---------------------------------------------------------------------
        # Widgets
        # ---------------------------------------------------------------------
        self.titleLabel = QLabel("Oobat Developer Dashboard")
        self.titleLabel.setFont(QFont('Arial', 20))

        self.addCardLabel = QLabel("Add a card")
        self.addCardLabel.setFont(QFont('Arial', 12))
        self.ACkeyLabel = QLabel("key:")
        self.hint1Label = QLabel("hint 1:")
        self.hint2Label = QLabel("hint 2:")
        self.hint3Label = QLabel("hint 3:")
        self.hint4Label = QLabel("hint 4:")
        self.hint5Label = QLabel("hint 5:")

        self.ACkeyField = QLineEdit()
        self.hint1Field = QLineEdit()
        self.hint2Field = QLineEdit()
        self.hint3Field = QLineEdit()
        self.hint4Field = QLineEdit()
        self.hint5Field = QLineEdit()

        self.addCardButton = QPushButton("Submit card")
        styleSheet = "QPushButton { max-width: 200 }"
        self.addCardButton.setStyleSheet(styleSheet)

        self.deleteCardLabel = QLabel("Delete a card")
        self.deleteCardLabel.setFont(QFont('Arial', 12))
        self.DCkeyLabel = QLabel("key")
        self.DCkeyField = QLineEdit()
        self.deleteCardButton = QPushButton("Delete card")

        self.searchCardLabel = QLabel("Search for a card")
        self.searchCardLabel.setFont(QFont('Arial', 12))
        self.SCkeyLabel = QLabel("key:")
        self.SCkeyField = QLineEdit()
        self.searchCardButton = QPushButton("Search Card")
        styleSheet = "QPushButton { max-width: 200 }"
        self.searchCardButton.setStyleSheet(styleSheet)

        self.scoresTitle = QLabel("Current Scores:")
        self.scoresTitle.setFont(QFont('Arial', 12))
        self.classicTitle = QLabel("Classic")
        self.classicTitle.setFont(QFont('Arial', 10))
        self.survivalTitle = QLabel("Survival")
        self.survivalTitle.setFont(QFont('Arial', 10))
        self.suddenDeathTitle = QLabel("Sudden Death")
        self.suddenDeathTitle.setFont(QFont('Arial', 10))

        self.classic1Label = QLabel("classic #1")
        self.classic2Label = QLabel("classic #2")
        self.classic3Label = QLabel("classic #3")

        self.survival1Label = QLabel("survival #1")
        self.survival2Label = QLabel("survival #2")
        self.survival3Label = QLabel("survival #3")

        self.suddenDeath1Label = QLabel("Sudden Death #1")
        self.suddenDeath2Label = QLabel("Sudden Death #2")
        self.suddenDeath3Label = QLabel("Sudden Death #3")

        self.resestScoresButton = QPushButton("Reset high scores")

        self.quitButton = QPushButton("Quit")

        palette = self.quitButton.palette() # change quit button's palette to red
        palette.setColor(palette.ButtonText, QColor(255, 0, 0))
        self.quitButton.setPalette(palette)
        # ---------------------------------------------------------------------
        # Manage Layouts
        # ---------------------------------------------------------------------
        veryLargeSpace = 450
        largeSpacing = 30
        smallSpacing = 10

        addCardLayout.addWidget(self.addCardLabel)
        addCardLayout.addWidget(self.ACkeyLabel)
        addCardLayout.addWidget(self.ACkeyField)
        addCardLayout.addWidget(self.hint1Label)
        addCardLayout.addWidget(self.hint1Field)
        addCardLayout.addWidget(self.hint2Label)
        addCardLayout.addWidget(self.hint2Field)
        addCardLayout.addWidget(self.hint3Label)
        addCardLayout.addWidget(self.hint3Field)
        addCardLayout.addWidget(self.hint4Label)
        addCardLayout.addWidget(self.hint4Field)
        addCardLayout.addWidget(self.hint5Label)
        addCardLayout.addWidget(self.hint5Field)
        addCardLayout.addWidget(self.addCardButton)

        deleteCardLayout.addWidget(self.deleteCardLabel, alignment=Qt.AlignTop)
        deleteCardLayout.addWidget(self.DCkeyLabel, alignment=Qt.AlignCenter)
        deleteCardLayout.addWidget(self.DCkeyField, alignment=Qt.AlignCenter)
        deleteCardLayout.addWidget(self.deleteCardButton, alignment=Qt.AlignBottom)

        searchCardLayout.addWidget(self.searchCardLabel, alignment=Qt.AlignTop)
        searchCardLayout.addWidget(self.SCkeyLabel,alignment=Qt.AlignCenter)
        searchCardLayout.addWidget(self.SCkeyField,alignment=Qt.AlignCenter)
        searchCardLayout.addWidget(self.searchCardButton,alignment=Qt.AlignBottom)

        scoresLayout.addWidget(self.scoresTitle)
        scoresLayout.addWidget(self.classicTitle)
        scoresLayout.addWidget(self.classic1Label)
        scoresLayout.addWidget(self.classic2Label)
        scoresLayout.addWidget(self.classic3Label)
        scoresLayout.addWidget(self.survivalTitle)
        scoresLayout.addWidget(self.survival1Label)
        scoresLayout.addWidget(self.survival2Label)
        scoresLayout.addWidget(self.survival3Label)
        scoresLayout.addWidget(self.suddenDeathTitle)
        scoresLayout.addWidget(self.suddenDeath1Label)
        scoresLayout.addWidget(self.suddenDeath2Label)
        scoresLayout.addWidget(self.suddenDeath3Label)
        scoresLayout.addWidget(self.resestScoresButton)

        mainLayout.addWidget(self.titleLabel)
        mainLayout.addLayout(addCardLayout)
        mainLayout.addSpacing(largeSpacing)
        mainLayout.addLayout(deleteCardLayout)
        mainLayout.addSpacing(largeSpacing)
        mainLayout.addLayout(searchCardLayout)
        mainLayout.addSpacing(largeSpacing)
        mainLayout.addLayout(scoresLayout)

        masterLayout.addWidget(self.titleLabel, alignment=Qt.AlignTop)
        masterLayout.addLayout(mainLayout)
        masterLayout.addSpacing(largeSpacing)
        masterLayout.addWidget(self.quitButton, alignment=Qt.AlignRight)
        # ---------------------------------------------------------------------
        # Manage signals
        # ---------------------------------------------------------------------
        self.quitButton.clicked.connect(self.quitApp)
        self.addCardButton.clicked.connect(self.addCard)
        self.searchCardButton.clicked.connect(self.searchCard)
        self.deleteCardButton.clicked.connect(self.deleteCard)

        self.getScores() # populate the high score list

    def getScores():
        """ Gets the scores from the DB and displays them on the dashboard

            input: none

            output: none
        """
        
        return

    def deleteCard(self):
        """Sends a key to the DB for that card to be deleted

           input: none

           output: none
        """
        returnStatus = self.db.removeCard(self.DCkeyField.text())
        if returnStatus == 'success':
            display = messageBox("card deleted from the database")
            display.exec() # display a pop up
        else:
            display = messageBox("the card could not be deleted")
            display.exec() # display a pop up with your application info
        self.clearDeleteCardForm()

    def clearDeleteCardForm(self):
        self.DCkeyField.clear()

    def addCard(self):
        """Sends card data to the DB to be added to the cards table
           input: none
           output: none
           modifies class data members
        """
        returnStatus = self.db.addCard(self.ACkeyField.text(),
        self.hint1Field.text(),
        self.hint2Field.text(),
        self.hint3Field.text(),
        self.hint4Field.text(),
        self.hint5Field.text())

        if returnStatus == 'failure':
            display = messageBox("could not add the card to the database")
            display.exec() # display a pop up with your application info
        self.clearAddCardForm()

    def clearAddCardForm(self):
        """ Empties the add card form fields

           input: none

           output: none
        """
        self.ACkeyField.clear() # clear form fields
        self.hint1Field.clear()
        self.hint2Field.clear()
        self.hint3Field.clear()
        self.hint4Field.clear()
        self.hint5Field.clear()


    def searchCard(self):
        """ searches for a card in the DB by key

            input: none

            output: none
        """
        result = self.db.searchCard(self.SCkeyField.text())
        if result == -1 or result == None: # query failed or the card does not exist
            display = messageBox("could not find this card in the database")
            display.exec() # display a pop up with your application info
        else:
            display = messageBox(result)
            display.exec()
        self.clearSearchCardForm()

    def clearSearchCardForm(self):
        """Empties search card form field

           Input: None

           Ouput: None
        """
        self.SCkeyField.clear() # clear form field

    def clearForm(self):
        """ Clears all forms in the application
            input: None
            output: none
        """
        self.SCkeyField.clear() # clear search card

        self.ACKeyField.clear() # clear add card
        self.hint1Field.clear()
        self.hint2Field.clear()
        self.hint3Field.clear()
        self.hint4Field.clear()
        self.hint5Field.clear()

        self.DCkeyField.clear() # clear delete card

    def quitApp(self):
        """spawns dialog box to confirm if the user wants to exit the program

           Input: None

           Output: None
        """
        dialog = confirmationDialog() # open dialog window asking for user confirmation
        response = dialog.exec()

        if response == dialog.Accepted: # user confirms that they want to quit
            self.quitApplication.emit()


    def submitInfo (self):
        """ Pulls inputs from the form fields in to the class data members,

            Input: None

            Output: None
        """
        self.firstName = self.firstNameField.text()
        self.lastName = self.lastNameField.text()
        self.email = self.emailField.text()
        self.bio = self.bioField.toPlainText()
        self.major = self.majorCB.currentText()
        display = messageBox(self.firstName, self.lastName, self.email, self.bio, self.major)
        display.exec() # display a pop up with your application info
        self.clearForm() # empty the form


    def checkFirstName(self, text):
        """ Read applicant first name in from the form

            Input: text from text box

            Output: None
        """
        self.firstName = text

    def checkLastName(self, text):
        """ Read applicant last name in from the form

            Input: text from text box

            Output: None
        """
        self.lastName = text

    def checkEmail(self, text):
        """ Check if applicant email is a valid email address

            Input: text from email field

            Output: None
        """
        if (text.find('.com') == -1 or text.find('@') == -1):
            self.emailField.setStyleSheet("color: red;")
        else:
            self.emailField.setStyleSheet("color: black;")

    def checkBio(self, text):
        self.bio = text
