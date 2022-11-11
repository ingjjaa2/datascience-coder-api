import { Router } from 'express';

class HealthRoutes {

  getRoutes = ()=>{
    const router = Router();
    router.get('/',this.getHealth)
    return router;
  }


  private getHealth = async (req, res) => {
    res.status(200).json({ ok: true });
  };
}

export default new HealthRoutes();