import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log('MongoDB connected'));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// export const connectDB = async () => {
//   const uri = process.env.MONGO_URI;
//   if (!uri) {
//     console.error(
//       'Missing MONGO_URI in .env. Set it to your Atlas connection string (from Atlas → Connect → Drivers).'
//     );
//     return;
//   }
//   try {
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log('You successfully connected to MongoDB!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     if (error?.code === 'ECONNREFUSED' && error?.syscall === 'querySrv') {
//       console.error(
//         '\nDNS SRV lookup failed (common with VPNs, school/corporate networks, or blocked DNS).\n' +
//           'Try: (1) Use another network or set DNS to 8.8.8.8 / 1.1.1.1.\n' +
//           '(2) In Atlas → Connect → Drivers, use the standard connection string (mongodb://… hosts) instead of mongodb+srv:// and paste it into MONGO_URI in .env.\n'
//       );
//     }
//   }
// };


