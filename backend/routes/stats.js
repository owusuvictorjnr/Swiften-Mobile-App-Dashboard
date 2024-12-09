import { Router } from 'express';
import { query } from '../db';
import authenticateToken from '../middleware/authenticateToken';
const router = Router();

router.get('/', authenticateToken, async (req, res) => {
  try {
    const totalDeliveries = await query('SELECT COUNT(*) FROM packages');
    const packagesInTransit = await query(
      "SELECT COUNT(*) FROM packages WHERE status = 'in_transit'"
    );
    const completedDeliveries = await query(
      "SELECT COUNT(*) FROM packages WHERE status = 'delivered'"
    );
    const activeHubs = await query('SELECT COUNT(*) FROM hubs');
    const activeRiders = await query('SELECT COUNT(*) FROM riders WHERE status = $1', [
      'active',
    ]);

    res.json({
      totalDeliveries: totalDeliveries.rows[0].count,
      packagesInTransit: packagesInTransit.rows[0].count,
      completedDeliveries: completedDeliveries.rows[0].count,
      activeHubs: activeHubs.rows[0].count,
      activeRiders: activeRiders.rows[0].count,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;
