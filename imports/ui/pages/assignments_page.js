import React from 'react'
import Paper from 'material-ui/Paper'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { List, ListItem } from 'material-ui/List'
import { AppNavigation } from '../../ui/components/navigation'

export const AssignmentsPage = ({ assignments, organizationId }) => (
  <div>
    <AppNavigation
      organizationId={organizationId}
      title="Assignments"
    />
  <Paper>
      <List>
        { assignments.map((assignment) => (
          <ListItem
            key={assignment._id}
            onTouchTap={() => FlowRouter.go(`/${organizationId}/assignments/${assignment._id}`)}
            primaryText={assignment.campaign().title}
            secondaryText={assignment.campaign().description}
          />
        ))}
      </List>
  </Paper>
  </div>
)
