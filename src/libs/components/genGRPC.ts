import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

export function genClientGrpc(packageName: string, serviceName: string, protoPath: string) {
  return ClientsModule.register([
    {
      name: serviceName.toUpperCase() + '_SERVICE', // Consistent naming
      transport: Transport.GRPC,
      options: {
        package: packageName,
        protoPath: join(__dirname, protoPath), // Use path.join for correct path resolution
        url: '0.0.0.0:5001', // Default gRPC port, adjust if needed
        loader: {
          longs: Number,
          enums: String,
          bytes: Buffer,
          oneofs: true,
        },
      },
    },
  ]);
}
