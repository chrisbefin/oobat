from PyQt5.QtWidgets import QDialog, QVBoxLayout, QHBoxLayout, QLabel, QPushButton, QFrame, QCheckBox, QLineEdit, QMessageBox

class messageBox(QMessageBox):
    """ A pop up box for giving the user some message

        Input: name <str>
    """
    def __init__(self, message, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.setWindowTitle("message")

        # ---------------------------------------------------------------------
        # Variables
        # ---------------------------------------------------------------------
        spacing = 10
        indent = 20

        # ---------------------------------------------------------------------
        # Layouts
        # ---------------------------------------------------------------------

        # ---------------------------------------------------------------------
        # Widgets
        # ---------------------------------------------------------------------


        # ---------------------------------------------------------------------
        # Manage Layouts
        # ---------------------------------------------------------------------
        if type(message) is tuple: # complex mode for when card is passed
            print(message)
            self.setText("card:")
            self.setInformativeText(', '.join(map(str, message)))

        else: # normal mode when simple string is passes
            self.setText("alert")
            self.setInformativeText(message)

        # ---------------------------------------------------------------------
        # Signals
        # ---------------------------------------------------------------------
