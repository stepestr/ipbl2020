-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema stepestr
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stepestr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stepestr` DEFAULT CHARACTER SET latin1 ;
USE `stepestr` ;

-- -----------------------------------------------------
-- Table `stepestr`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`address` (
  `add_id` INT(11) NOT NULL AUTO_INCREMENT,
  `add_street` VARCHAR(255) NOT NULL,
  `add_number` INT(11) NOT NULL,
  `add_city` VARCHAR(255) NOT NULL,
  `add_state` VARCHAR(255) NOT NULL,
  `add_country` VARCHAR(255) NOT NULL,
  `add_zip_code` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`add_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`contact` (
  `con_id` INT(11) NOT NULL AUTO_INCREMENT,
  `con_desc` VARCHAR(255) NOT NULL,
  `con_type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`con_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`employee` (
  `emp_id` INT(11) NOT NULL AUTO_INCREMENT,
  `emp_name` VARCHAR(255) NOT NULL,
  `emp_cns_code` INT(11) NOT NULL,
  `emp_occupation` VARCHAR(255) NOT NULL,
  `idAddressIdAddress` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  UNIQUE INDEX `REL_37f055c670a7177de599b7bd1d` (`idAddressIdAddress` ASC) VISIBLE,
  CONSTRAINT `FK_37f055c670a7177de599b7bd1d5`
    FOREIGN KEY (`idAddressIdAddress`)
    REFERENCES `stepestr`.`address` (`add_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`employee_contacts_contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`employee_contacts_contact` (
  `employeeEmpId` INT(11) NOT NULL,
  `contactConId` INT(11) NOT NULL,
  PRIMARY KEY (`employeeEmpId`, `contactConId`),
  INDEX `IDX_ada8d62145b218979cb463d949` (`employeeEmpId` ASC) VISIBLE,
  INDEX `IDX_2b0419dd84d8c24688694e2b8a` (`contactConId` ASC) VISIBLE,
  CONSTRAINT `FK_2b0419dd84d8c24688694e2b8a3`
    FOREIGN KEY (`contactConId`)
    REFERENCES `stepestr`.`contact` (`con_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_ada8d62145b218979cb463d9496`
    FOREIGN KEY (`employeeEmpId`)
    REFERENCES `stepestr`.`employee` (`emp_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`hospital`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`hospital` (
  `hos_id` INT(11) NOT NULL AUTO_INCREMENT,
  `hos_cnpj` VARCHAR(255) NOT NULL,
  `hos_cnes_code` INT(11) NOT NULL,
  `hos_name` VARCHAR(255) NOT NULL,
  `hos_corporate_name` VARCHAR(255) NOT NULL,
  `idAddressIdAddress` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`hos_id`),
  UNIQUE INDEX `REL_c624ec0214e5e0243f54a7f8be` (`idAddressIdAddress` ASC) VISIBLE,
  CONSTRAINT `FK_c624ec0214e5e0243f54a7f8be2`
    FOREIGN KEY (`idAddressIdAddress`)
    REFERENCES `stepestr`.`address` (`add_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`hospital_contacts_contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`hospital_contacts_contact` (
  `hospitalHosId` INT(11) NOT NULL,
  `contactConId` INT(11) NOT NULL,
  PRIMARY KEY (`hospitalHosId`, `contactConId`),
  INDEX `IDX_3c7fe137340b359521bf96b0e1` (`hospitalHosId` ASC) VISIBLE,
  INDEX `IDX_585375888ba39c3a70e1b20084` (`contactConId` ASC) VISIBLE,
  CONSTRAINT `FK_3c7fe137340b359521bf96b0e1f`
    FOREIGN KEY (`hospitalHosId`)
    REFERENCES `stepestr`.`hospital` (`hos_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_585375888ba39c3a70e1b20084b`
    FOREIGN KEY (`contactConId`)
    REFERENCES `stepestr`.`contact` (`con_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`hospital_employees_contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`hospital_employees_contact` (
  `hospitalHosId` INT(11) NOT NULL,
  `contactConId` INT(11) NOT NULL,
  PRIMARY KEY (`hospitalHosId`, `contactConId`),
  INDEX `IDX_9957cd7d84762dad34721830b6` (`hospitalHosId` ASC) VISIBLE,
  INDEX `IDX_7fcb62e01320972447be5b0e25` (`contactConId` ASC) VISIBLE,
  CONSTRAINT `FK_7fcb62e01320972447be5b0e255`
    FOREIGN KEY (`contactConId`)
    REFERENCES `stepestr`.`contact` (`con_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_9957cd7d84762dad34721830b64`
    FOREIGN KEY (`hospitalHosId`)
    REFERENCES `stepestr`.`hospital` (`hos_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`hospital_persons_contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`hospital_persons_contact` (
  `hospitalHosId` INT(11) NOT NULL,
  `contactConId` INT(11) NOT NULL,
  PRIMARY KEY (`hospitalHosId`, `contactConId`),
  INDEX `IDX_e6f1bc5d002e1165b5df41f060` (`hospitalHosId` ASC) VISIBLE,
  INDEX `IDX_5be11335924cf9ad38aca984fe` (`contactConId` ASC) VISIBLE,
  CONSTRAINT `FK_5be11335924cf9ad38aca984fe5`
    FOREIGN KEY (`contactConId`)
    REFERENCES `stepestr`.`contact` (`con_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_e6f1bc5d002e1165b5df41f060a`
    FOREIGN KEY (`hospitalHosId`)
    REFERENCES `stepestr`.`hospital` (`hos_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `stepestr`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stepestr`.`person` (
  `per_id` INT(11) NOT NULL AUTO_INCREMENT,
  `per_name` VARCHAR(255) NOT NULL,
  `per_cpf` INT(11) NOT NULL,
  `per_birth` INT(11) NOT NULL,
  `idAddressIdAddress` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`per_id`),
  UNIQUE INDEX `REL_a85113f17d3c77e38f2bac46c3` (`idAddressIdAddress` ASC) VISIBLE,
  CONSTRAINT `FK_a85113f17d3c77e38f2bac46c32`
    FOREIGN KEY (`idAddressIdAddress`)
    REFERENCES `stepestr`.`address` (`add_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
