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
        self.dashboardMenu = QMenu("dashboard")

        # Add actions to the application menu
        self.dashboardMenu.addActions(self.actions.getDashboardActions())

        # Create an options menu
        self.optionsMenu = QMenu("Options")

        # Add the dashboard menu to the options menu
        self.optionsMenu.addMenu(self.dashboardMenu)

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
        self.actions.clearAction.triggered.connect(self.mainWidget.clearForm)
        self.actions.resetAction.triggered.connect(self.mainWidget.resetScores)
        self.actions.aboutAction.triggered.connect(self.mainWidget.aboutInfo)

    def quit(self):
        exit(0)

class Actions(QObject):
    def __init__(self):
        QObject.__init__(self)

        # Create a clear forms action
        self.clearAction = QAction("clear forms", self)
        self.clearAction.setIcon(QIcon("clear.png"))

        # Create an exit action
        self.exitAction = QAction("Exit", self)
        self.exitAction.setIcon(QIcon("exit.png"))


        #create a reset action
        self.resetAction = QAction("Reset High Scores", self)
        self.resetAction.setIcon(QIcon("reset.png"))

        # create an about action
        self.aboutAction = QAction("About", self)
        self.aboutAction.setIcon(QIcon("about.png"))

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

    def getDashboardActions(self):
        """Return all the actions for the dashboard menu.

           Input:  None
           Output: actions [<QAction>]
        """
        actionList = self.addSeparators([self.resetAction, self.clearAction, self.aboutAction])
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
        actionList = self.addSeparators([self.resetAction, None, self.clearAction, None, self.exitAction])

        return(actionList)
