#!/usr/bin/env python3

from central_widget import CentralWidget
from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import QMainWindow, QAction, QMenu, QToolBar
from PyQt5.QtCore import QObject

class MainWindow(QMainWindow):
    """ This is the main window of the Qt application. """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # ---------------------------------------------------------------------
        # Setup Window
        # ---------------------------------------------------------------------
        self.setWindowTitle("Developer Dashboard")
        self.setWindowIcon(QIcon('logo.png'))
        # ---------------------------------------------------------------------
        # Menus/ Widgets
        # ---------------------------------------------------------------------
        # Create an instance of an Actions object. This contains all the QActions
        # to be used in this application.
        self.actions = Actions()

        # Create a MainWidget object. Note the Actions are being passed in.
        self.mainWidget = CentralWidget(self.actions)

        # Set the central widget
        self.setCentralWidget(self.mainWidget)

        # Create an application menu (this will be a sub-menu)
        self.applicationMenu = QMenu("application")

        # Add actions to the application menu
        self.applicationMenu.addActions(self.actions.getApplicationActions())

        # Create an options menu
        self.optionsMenu = QMenu("Options")

        # Add the application menu to the options menu
        self.optionsMenu.addMenu(self.applicationMenu)

        # Add actions to the options menu
        self.optionsMenu.addActions(self.actions.getOptionsActions())

        # Add the options menu to the menu bar
        self.menuBar().addMenu(self.optionsMenu)

        # Create a tool bar
        self.toolBar = QToolBar()

        # Add actions to the tool bar
        self.toolBar.addActions(self.actions.getToolBarActions())

        # Add the tool bar to this MainWindow
        self.addToolBar(self.toolBar)

        # Connect the signals
        self.actions.exitAction.triggered.connect(self.quit)
        self.mainWidget.quitApplication.connect(self.quit)
        self.actions.resetAction.triggered.connect(self.mainWidget.clearForm)
        self.actions.submitAction.triggered.connect(self.mainWidget.submitInfo)

    def quit(self):
        exit(0)

class Actions(QObject):
    def __init__(self):
        QObject.__init__(self)

        # Create a reset form action
        self.resetAction = QAction("clear form", self)
        self.resetAction.setIcon(QIcon("reset.png"))

        # Create an exit action
        self.exitAction = QAction("Exit", self)
        self.exitAction.setIcon(QIcon("exit.png"))


        #create a submit action
        self.submitAction = QAction("Submit application", self)
        self.submitAction.setIcon(QIcon("submit.png"))


    def addSeparators(self, actionList):
        """Replace None values in the action list with separators.

           Input:  action list [<QAction> or None]
           Output: action list with separators [<QAction>]
        """
        # Go through each action in the action list
        for index, action in enumerate(actionList):
            # If the action is None, this means we replace the None
            # with a separator action.
            if(action is None):
                # Create a separator action
                sepAction = QAction(self)
                sepAction.setSeparator(True)

                # Replace "None" with the separator action
                actionList[index] = sepAction

        return(actionList)

    def getApplicationActions(self):
        """Return all the actions for the application menu.

           Input:  None
           Output: actions [<QAction>]
        """
        actionList = self.addSeparators([self.submitAction, self.resetAction])
        return (actionList)

    def getOptionsActions(self):
        """Return all the actions for the options menu.

           Input:  None
           Output: actions [<QAction>]
        """
        # Replace any "None" values with separators
        actionList = self.addSeparators([self.exitAction])

        return (actionList)

    def getToolBarActions(self):
        """Return all the tool bar actions.

           Input:  None
           Output: actions [<QAction>]
        """
        # Replace any "None" values with separators
        actionList = self.addSeparators([self.submitAction, None, self.resetAction, None, self.exitAction])

        return(actionList)
