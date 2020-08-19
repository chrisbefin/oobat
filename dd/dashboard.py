import sys
from PyQt5.QtWidgets import QApplication
from main_window import MainWindow

def main():
    """ Initiate GUI for the oobat developer dashboard """
    # Create a QApplication
    app = QApplication(sys.argv)

    # Create a MainWindow
    mainWindow = MainWindow()

    # Show said MainWindow
    mainWindow.show()

    # Start the event loop and pass the return code back to the OS
    exit(app.exec())


if __name__ == "__main__":
    main()
