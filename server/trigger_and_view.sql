-- trigger
CREATE TRIGGER add_item
    AFTER insert
    on DetailOrder
    FOR EACH ROW
EXECUTE PROCEDURE changeQty();

CREATE OR REPLACE FUNCTION changeQty()
    RETURNS trigger AS
$$
declare
    G varchar;
BEGIN
    update color set quantity= quantity - new.Quantity where IdProduct = new.IdProduct and Color.color = new.color;
    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;

-- view
create view  statistic as
select p.NameProduct, t1.*, t2.sold
from (select idproduct, color, sum(c.quantity) as inStock
      from color c
      group by idproduct, color) as t1
         left join
     (select idproduct, color, sum(d.quantity) as sold
      from detailorder d
      group by idproduct, color) as t2 on t1.idproduct = t2.idproduct and t1.color = t2.color
         join product p on t1.idproduct = p.idproduct
order by t2.sold;