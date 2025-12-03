-- Cria o banco de daos on vamos trabalhar
create database sistema_Prorodutos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table produto (
	id int auto_increment primary key, -- ID ÚNICO
	nome varchar(100) not null, -- Nome do produto
	email varchar(120) not null, -- Email (exemplo generico)
	telefone varchar(20), -- Telefone
	cpf varchar (14), -- Cpf
	endereco varchar(150), -- Endereco simples
);

-- Insere dois registros
insert into produtos (nome,email,telefone,cpf,endereco) values
	('Eduardo Ramos' 'edu.ramos@osrutos.com' '1245454-777', '454.454.454-55', 'Rua Orutos F');
    ('Juliana clara ', 'juliana@orutos.com', '45454545-745', '745.988.977-75', 'Rua Orutos' );
    
    -- Selecionando o registro onde o id = 1
    select * from produtos where id = 1


select * from produtos



