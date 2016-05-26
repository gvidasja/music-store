insert into promos(
    code,
    description,
    fk_Discountid,
    amountLeft
) values (
    '{code}',
    '{description}',
    {discount},
    {amount}
) on duplicate key update
    code = values(code),
    description = values(description),
    fk_Discountid = values(fk_Discountid),
    amountLeft = values(amountLeft)