import { Injectable } from '@nestjs/common';
import driver from 'bigchaindb-driver';
import { Emergency } from '../Emergency/Emergency';

@Injectable()
export class BigChainService {
  constructor() {}

  async connect() {
    let alice: any = new driver.Ed25519Keypair();
    let apiAddress = process.env.LIB_BLOCKCHAIN;
  }
}
