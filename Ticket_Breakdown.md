# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
**Update Agents endpoint** - Refactor the `createAgent` endpoint to include the `agentId` property when creating new agents.
1. `agentId` should be of string type.
2. `agentId` is a mandatory parameter.
3. `createAgent` should return an error if `agentId` is not provided.
4. Update unit tests to include cases of `agentId` not provided and not typeof string.

_estimate_: 2

**Update Existing Agents in the database** - Update current Agents table to include `agentId` property for Agents.
1. Convert existing Agent's database Id to a `agentId` property.
2. `agentId` should be of string type.

_estimate_: 2

**Update getShiftsByFacility** - Refactor the `getShiftsByFacility` endpoint to include `agentId` in the Agents object in the Shifts list.
4. Update mocked data in unit tests to include property `agentId` for Shift lists.

_estimate_: 1