from PyQt5.QtWidgets import QDialog, QVBoxLayout, QHBoxLayout, QLabel, QPushButton, QFrame, QCheckBox, QLineEdit

class confirmationDialog(QDialog):
    """ A dialog used for submitting names. If the name isn't correct, this
        dialog allows the user to correct the name and then resubmit.

        Input: name <str>
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.setWindowTitle("Confirm exit")

        # ---------------------------------------------------------------------
        # Variables
        # ---------------------------------------------------------------------
        spacing = 10
        indent = 20

        # ---------------------------------------------------------------------
        # Layouts
        # ---------------------------------------------------------------------
        mainLayout = QVBoxLayout(self)
        buttonLayout = QHBoxLayout()
        questionLayout = QHBoxLayout()

        # ---------------------------------------------------------------------
        # Widgets
        # ---------------------------------------------------------------------
        fontFactor = 1.5

        questionLabel = QLabel("Are you sure you would like to exit the application?")
        font = questionLabel.font()
        font.setBold(True)
        font.setPointSize(int(font.pointSize() * fontFactor))


        # Horizontal line
        horizFrame = QFrame()
        horizFrame.setFrameShape(QFrame.HLine)
        horizFrame.setFrameShadow(QFrame.Sunken)

        self.__yesButton = QPushButton("Yes")
        self.__noButton = QPushButton("No")

        # ---------------------------------------------------------------------
        # Manage Layouts
        # ---------------------------------------------------------------------
        questionLayout.addStretch(0)
        questionLayout.addWidget(questionLabel)
        questionLayout.addStretch(0)


        buttonLayout.addStretch(0)
        buttonLayout.addWidget(self.__yesButton)
        buttonLayout.addWidget(self.__noButton)

        mainLayout.addLayout(questionLayout)
        mainLayout.addSpacing(spacing)
        mainLayout.addSpacing(spacing)
        mainLayout.addWidget(horizFrame)
        mainLayout.addLayout(buttonLayout)

        # ---------------------------------------------------------------------
        # Signals
        # ---------------------------------------------------------------------
        self.__yesButton.clicked.connect(self.accept)
        self.__noButton.clicked.connect(self.reject)
