<template>
  <div class="q-pa-md">
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Add Customer" color="primary" @click="showDialog" />
    </div>

    <q-table
      @row-click="openDetails"
      title="Customers"
      :rows="data"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn
              flat
              round
              color="red"
              icon="delete"
              @click.stop="deleteCustomer(props.row.id)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "nets",
    label: "Nets",
    field: "nets",
    sortable: true,
  },
  {
    name: "computers",
    label: "Computers",
    field: "computers",
    sortable: true,
  },
  {
    name: "devices",
    label: "Devices",
    field: "devices",
    sortable: true,
  },
  {
    name: "backups",
    label: "Backups",
    field: "backups",
    sortable: true,
  },
  {
    name: "licenses",
    label: "Licenses",
    field: "licenses",
    sortable: true,
  },
  {
    name: "users",
    label: "Users",
    field: "users",
    sortable: true,
  },
  {
    name: "actions",
    label: "Actions",
    sortable: true,
  },
];
import { useQuasar } from "quasar";
import { computed } from "vue";
import { useRouter } from "vue-router";

import AddCustomerDialog from "./AddCustomer.vue";

import { Weekday, DayOfMonth, Month } from "models/core/Calendar";
import { HoursInDay, MinutesInHour } from "models/core/Time";
import {
  BackupMethod,
  Notification,
  NotificationFromBackup,
  NotificationType,
  TargetDevice,
} from "models/backups";
import { Customer, Location, Owner } from "models/customers";

import {
  DeviceManufacturer,
  DeviceCategory,
  HardwareModel,
  WarrantyType,
  Warranty,
} from "models/devices";

import {
  OperatingSystem,
  Software,
  SoftwareArchitecture,
} from "models/softwares";

import {
  AdGroup,
  MailAlias,
  MailGroup,
  User,
  UserInAdGroup,
  UserInMailGroup,
} from "models/users";

import {
  ComputerLicense,
  LicenseWithComputer,
  UserLicense,
} from "models/licenses";

export default {
  setup() {
    const $q = useQuasar();

    const router = useRouter();
    const data = computed(() => Customer.all());
    const notifications = computed(() =>
      Notification.query().withAll().first()
    );

    function openDetails(_, customer) {
      router.push({
        name: "customer-details",
        params: { customerId: customer.id },
      });
    }
    function deleteCustomer(id) {
      Customer.remove(id);
    }

    function showDialog() {
      $q.dialog({
        component: AddCustomerDialog,
      });
    }

    Weekday.fetch();
    DayOfMonth.fetch();
    Month.fetch();
    HoursInDay.fetch();
    MinutesInHour.fetch();

    BackupMethod.fetch();
    Notification.fetch();
    NotificationFromBackup.fetch();
    NotificationType.fetch();
    TargetDevice.fetch();

    Customer.fetch();
    Location.fetch();
    Owner.fetch();

    DeviceManufacturer.fetch();
    DeviceCategory.fetch();
    HardwareModel.fetch();
    WarrantyType.fetch();
    Warranty.fetch();

    OperatingSystem.fetch();
    Software.fetch();
    SoftwareArchitecture.fetch();

    AdGroup.fetch();
    MailAlias.fetch();
    MailGroup.fetch();
    User.fetch();
    UserInAdGroup.fetch();
    UserInMailGroup.fetch();

    ComputerLicense.fetch();
    LicenseWithComputer.fetch();
    UserLicense.fetch();

    return {
      deleteCustomer,
      data,
      openDetails,
      columns,
      showDialog,
      notifications,
    };
  },
};
</script>
