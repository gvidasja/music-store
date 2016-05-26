insert into users(
    id,
    email,
    phone
) values (
    {id},
    '{email}',
    '{phone}'
) on duplicate key update
    id = values(id),
    email = values(email),
    phone = values(phone)