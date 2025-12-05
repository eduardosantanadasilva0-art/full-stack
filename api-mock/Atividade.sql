-- Crie o banco de daos onde vamos criar
create database sistema_Dados;

use sistema_Dados;

-- Criar uma tabela chamada Dados pesssoais
create table Dados(
	id int auto_increment primary key, -- Dados Unico
    nome varchar(100) not null, -- Nome Do Indiviuo
    email varchar(100) not null, -- Email (Exemplo generico)
    telefone varchar(20), -- Telefone 
    cpf varchar (14) -- CPF
);

-- Inserir Dados Pessoais
insert into Dados (nome, email, telefone, cpf) value
	('Marcos Aurelio', 'marcosnop@gmail.com', '+55 11 33569-8800', '367.890.052-03'),
    ('Vanessa Adriana', 'vanessadark@gmail.com', '+55 11 56701- 4567', '467.027.901-01');
    
-- Selecionar o Dados onde o ID 1
select * from Dados where id = 1 ;
select * from Dados where id = 2 ;

select * from dados;