import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

class HealthRoutes {

  logs:any[]

  constructor() {
    const rawLogs = fs.readFileSync(path.join(__dirname, '../../../oilField.csv')).toString().split("\r\n")
    const headers = rawLogs[0].split(",")
    const logs =[]

    for (let index = 1; index < rawLogs.length; index++) {
      const line = rawLogs[index].split(',');
      const lineJson = {}
      headers.forEach((h,i) => {
        try {
          lineJson[h]= isNaN(parseFloat(line[i]))?line[i]:parseFloat(line[i])        
        } catch (error) {
          lineJson[h]= line[i]          
        }
      });
      logs.push(lineJson)
    }
    this.logs = logs
  }

  getRoutes = ()=>{
    const router = Router();
    router.get('/oilField',this.getLog)
    return router;
  }

  private getLog = async (req, res) => {
    const {page} = req.query;
    const subData = this.logs.splice(50*page,50*page+50)
    res.status(200).json({ data:subData, totalRecords:this.logs.length, perPage:50, totalPages:Math.ceil(this.logs.length/50) ,page: parseInt(page) });
  };
}

export default new HealthRoutes();