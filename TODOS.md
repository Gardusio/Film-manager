# Todos

- add a mapper for error responses

- add validation mdw chain to other routers


# Missing reqs

- An authenticated user has access to the CRUD operations for the film elements:

The user can also retrieve the list of
all the films that she has been invited to review.
▪ The user can update an existing film, if she is the owner of the film. However, this
operation does not allow changing its visibility from public to private (and vice
versa).
▪ The user can delete an existing film, if she is the owner of the film


- A central feature of the Film Manager service is issuing invitations to review public films
to the users who have access to the service. The main operations related to this feature
are:
• The owner of a public film can issue a review invitation to a user (the reviewer may
be the owner herself).
• The owner of a film can remove a review invitation, if the review has not yet been
completed by the reviewer.
• A reviewer invited for a film can mark the review as completed, also updating the
review date, the rating and the textual description of the review.
Review invitations for a film can be issued to multiple users at the same time. Each user
the review invitation has been issued to can mark the review for that film as completed.
Hint: you might need to create a new table in the database, to represent this kind of
relationship between films and users, and define some foreign keys so as to link this table
with the tables storing the records related to users and films.
Finally, the service must offer an additional operation to automatically issue review
invitations for films for which no invitation has been issued yet, in such a way that the
6
invitations to the users are balanced. While the design of this feature is mandatory, its
implementation is optional.