using System;
using System.Collections.Generic;
using System.Linq;

using JWTAuthenticationAPIDemo.Models;

namespace JWTAuthenticationAPIDemo.Repository
{
    public sealed class CustomersRepository
    {
        private static readonly object padLock = new object();
        private static CustomersRepository _customersRepositoryInstance = null;

        private List<Customer> Customers;
        private CustomersRepository()
        {
            Customers = new List<Customer>();
            Customers.Add(new Customer { Id = 1, Name = "Sabari", LastName = "CG", DateOfBirth = "13/06/1990", SubscriptionAmount = 1000 });
            Customers.Add(new Customer { Id = 2, Name = "Suresh", LastName = "KJ", DateOfBirth = "21/12/1990", SubscriptionAmount = 2000 });
            Customers.Add(new Customer { Id = 3, Name = "Venkatesh", LastName = "TR", DateOfBirth = "24/04/1991", SubscriptionAmount = 3000 });
        }

        public static CustomersRepository CustomersRepositoryInstance
        {
            get
            {
                if (_customersRepositoryInstance == null)
                {
                    lock (padLock)
                    {
                        if (_customersRepositoryInstance == null)
                        {
                            _customersRepositoryInstance = new CustomersRepository();
                        }
                    }
                }

                return _customersRepositoryInstance;
            }
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return Customers;
        }

        public Customer GetCustomerById(int id)
        {
            return Customers.Where(c => c.Id == id).FirstOrDefault();
        }

        public bool AddCustomer(Customer customer)
        {
            try
            {
                customer.Id = CustomersRepository.CustomersRepositoryInstance.Customers.Max(c => c.Id) + 1;

                Customers.Add(customer);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public bool UpdateCustomer(Customer customer)
        {
            try
            {
                Customers.Where(c => c.Id == customer.Id).ToList().ForEach(c =>
                {
                    c.Name = customer.Name;
                    c.LastName = customer.LastName;
                    c.DateOfBirth = customer.DateOfBirth;
                    c.SubscriptionAmount = customer.SubscriptionAmount;
                });

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteCustomer(int id)
        {
            try
            {
                Customers.RemoveAll(c => c.Id == id);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}