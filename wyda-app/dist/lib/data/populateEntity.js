import { getPool } from "./createPool";
export class populateEntity {
    poolPromise;
    entityID = '';
    constructor() {
        this.poolPromise = getPool();
    }
    async findEntity(x) {
        try {
            this.entityID = x;
            const pool = await this.poolPromise;
            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [this.entityID]);
            if (Array.isArray(rows) && rows.length > 0) {
                const user = rows[0];
                console.log('User found:', user);
            }
            else {
                console.log(`No user found with ID ${this.entityID}`);
                return false;
            }
            //this.createEntity();
            return true;
        }
        catch (error) {
            console.log('Database query failed: ', error);
            return false;
        }
    }
}
//test
async function test() {
    const testEntity = {
        id: 'unknown',
        entityID: 'ff321e1d-808e-43e7-bd0d-22ffad3b438a'
    };
    console.log(testEntity);
    const pe = new populateEntity();
    const found = await pe.findEntity(testEntity.entityID);
    if (found) {
        console.log("test success");
    }
    else {
        console.log("test failure");
    }
}
test().catch(console.error);
//# sourceMappingURL=populateEntity.js.map