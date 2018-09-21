
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/21/2018 10:56:16
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


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[Elapso].[CounterSet]', 'U') IS NOT NULL
    DROP TABLE [Elapso].[CounterSet];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CounterSet'
CREATE TABLE [Elapso].[CounterSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [Date] nvarchar(max)  NOT NULL,
    [CreatedBy] nvarchar(max)  NOT NULL,
    [CreationDate] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'CounterSet'
ALTER TABLE [Elapso].[CounterSet]
ADD CONSTRAINT [PK_CounterSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------