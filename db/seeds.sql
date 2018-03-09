use Salon_db;

create table appointments(
    id integerauto_increment,
    services varchar(100),
    date varchar(50),
    time varchar(50),
    firstname varchar(50),
    lastname varchar(50),
    email varchar(50),
    phonenumber varchar(50),
    primary key(id)
);

insert into appointments(services, date, time, firstname, lastname, email, phonenumber)
values('hair cut', '3-12-2018', '9:00', 'Gary', 'Busey', 'gbusey@gmail.com', '888-888-8888'
);

insert into appointments(services, date, time, firstname, lastname, email, phonenumber)
values('Perm', '3-15-2018', '11:00', 'Jennifer', 'Lawrence', 'JLaw@gmail.com', '888-888-8888'
);

SELECT * FROM products