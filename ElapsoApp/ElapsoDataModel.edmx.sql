
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/24/2018 19:21:05
-- Generated from EDMX file: C:\Users\Lukasz\source\repos\elapso\ElapsoApp\Models\ElapsoDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [elapsodb];
GO
IF SCHEMA_ID(N'Elapso') IS NULL EXECUTE(N'CREATE SCHEMA [Elapso]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[Elapso].[FK_CounterComment]', 'F') IS NOT NULL
    ALTER TABLE [Elapso].[ElapsoBaseClassSet_Comment] DROP CONSTRAINT [FK_CounterComment];
GO
IF OBJECT_ID(N'[Elapso].[FK_CounterReminder]', 'F') IS NOT NULL
    ALTER TABLE [Elapso].[ElapsoBaseClassSet_Reminder] DROP CONSTRAINT [FK_CounterReminder];
GO
IF OBJECT_ID(N'[Elapso].[FK_Counter_inherits_ElapsoBaseClass]', 'F') IS NOT NULL
    ALTER TABLE [Elapso].[ElapsoBaseClassSet_Counter] DROP CONSTRAINT [FK_Counter_inherits_ElapsoBaseClass];
GO
IF OBJECT_ID(N'[Elapso].[FK_Comment_inherits_ElapsoBaseClass]', 'F') IS NOT NULL
    ALTER TABLE [Elapso].[ElapsoBaseClassSet_Comment] DROP CONSTRAINT [FK_Comment_inherits_ElapsoBaseClass];
GO
IF OBJECT_ID(N'[Elapso].[FK_Reminder_inherits_ElapsoBaseClass]', 'F') IS NOT NULL
    ALTER TABLE [Elapso].[ElapsoBaseClassSet_Reminder] DROP CONSTRAINT [FK_Reminder_inherits_ElapsoBaseClass];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[Elapso].[ElapsoBaseClassSet]', 'U') IS NOT NULL
    DROP TABLE [Elapso].[ElapsoBaseClassSet];
GO
IF OBJECT_ID(N'[Elapso].[ElapsoBaseClassSet_Counter]', 'U') IS NOT NULL
    DROP TABLE [Elapso].[ElapsoBaseClassSet_Counter];
GO
IF OBJECT_ID(N'[Elapso].[ElapsoBaseClassSet_Comment]', 'U') IS NOT NULL
    DROP TABLE [Elapso].[ElapsoBaseClassSet_Comment];
GO
IF OBJECT_ID(N'[Elapso].[ElapsoBaseClassSet_Reminder]', 'U') IS NOT NULL
    DROP TABLE [Elapso].[ElapsoBaseClassSet_Reminder];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'ElapsoBaseClassSet'
CREATE TABLE [Elapso].[ElapsoBaseClassSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [CreatedBy] int  NOT NULL,
    [CreationDate] datetime  NOT NULL
);
GO

-- Creating table 'ElapsoBaseClassSet_Counter'
CREATE TABLE [Elapso].[ElapsoBaseClassSet_Counter] (
    [Title] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [Date] datetime  NOT NULL,
    [Id] int  NOT NULL
);
GO

-- Creating table 'ElapsoBaseClassSet_Comment'
CREATE TABLE [Elapso].[ElapsoBaseClassSet_Comment] (
    [Body] nvarchar(max)  NOT NULL,
    [CounterId] int  NOT NULL,
    [Id] int  NOT NULL
);
GO

-- Creating table 'ElapsoBaseClassSet_Reminder'
CREATE TABLE [Elapso].[ElapsoBaseClassSet_Reminder] (
    [CounterId] int  NOT NULL,
    [Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'ElapsoBaseClassSet'
ALTER TABLE [Elapso].[ElapsoBaseClassSet]
ADD CONSTRAINT [PK_ElapsoBaseClassSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ElapsoBaseClassSet_Counter'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Counter]
ADD CONSTRAINT [PK_ElapsoBaseClassSet_Counter]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ElapsoBaseClassSet_Comment'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Comment]
ADD CONSTRAINT [PK_ElapsoBaseClassSet_Comment]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ElapsoBaseClassSet_Reminder'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Reminder]
ADD CONSTRAINT [PK_ElapsoBaseClassSet_Reminder]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CounterId] in table 'ElapsoBaseClassSet_Comment'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Comment]
ADD CONSTRAINT [FK_CounterComment]
    FOREIGN KEY ([CounterId])
    REFERENCES [Elapso].[ElapsoBaseClassSet_Counter]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CounterComment'
CREATE INDEX [IX_FK_CounterComment]
ON [Elapso].[ElapsoBaseClassSet_Comment]
    ([CounterId]);
GO

-- Creating foreign key on [CounterId] in table 'ElapsoBaseClassSet_Reminder'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Reminder]
ADD CONSTRAINT [FK_CounterReminder]
    FOREIGN KEY ([CounterId])
    REFERENCES [Elapso].[ElapsoBaseClassSet_Counter]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CounterReminder'
CREATE INDEX [IX_FK_CounterReminder]
ON [Elapso].[ElapsoBaseClassSet_Reminder]
    ([CounterId]);
GO

-- Creating foreign key on [Id] in table 'ElapsoBaseClassSet_Counter'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Counter]
ADD CONSTRAINT [FK_Counter_inherits_ElapsoBaseClass]
    FOREIGN KEY ([Id])
    REFERENCES [Elapso].[ElapsoBaseClassSet]
        ([Id])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Id] in table 'ElapsoBaseClassSet_Comment'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Comment]
ADD CONSTRAINT [FK_Comment_inherits_ElapsoBaseClass]
    FOREIGN KEY ([Id])
    REFERENCES [Elapso].[ElapsoBaseClassSet]
        ([Id])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Id] in table 'ElapsoBaseClassSet_Reminder'
ALTER TABLE [Elapso].[ElapsoBaseClassSet_Reminder]
ADD CONSTRAINT [FK_Reminder_inherits_ElapsoBaseClass]
    FOREIGN KEY ([Id])
    REFERENCES [Elapso].[ElapsoBaseClassSet]
        ([Id])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------